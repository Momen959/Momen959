const fs = require('fs');
const path = require('path');

const gltfPath = path.join(__dirname, 'public', 'blackhole', 'scene.gltf');
const gltf = JSON.parse(fs.readFileSync(gltfPath, 'utf8'));
const bin = fs.readFileSync(path.join(__dirname, 'public', 'blackhole', gltf.buffers[0].uri));

const componentTypeMap = {
  5120: { array: Int8Array, bytes: 1 },
  5121: { array: Uint8Array, bytes: 1 },
  5122: { array: Int16Array, bytes: 2 },
  5123: { array: Uint16Array, bytes: 2 },
  5125: { array: Uint32Array, bytes: 4 },
  5126: { array: Float32Array, bytes: 4 },
};
const numComponents = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16,
};

const getAccessorArray = (accessor) => {
  const { array: ArrayType } = componentTypeMap[accessor.componentType];
  const bufferView = gltf.bufferViews[accessor.bufferView];
  const offset = (bufferView.byteOffset || 0) + (accessor.byteOffset || 0);
  const count = accessor.count * numComponents[accessor.type];
  return new ArrayType(bin.buffer, bin.byteOffset + offset, count);
};

const invalidAccessors = [];
for (let i = 0; i < gltf.accessors.length; i += 1) {
  const accessor = gltf.accessors[i];
  if (accessor.type === 'VEC3' && accessor.componentType === 5126) {
    const array = getAccessorArray(accessor);
    for (let j = 0; j < array.length; j += 1) {
      if (!Number.isFinite(array[j])) {
        invalidAccessors.push(i);
        break;
      }
    }
  }
}
console.log('invalidAccessors', invalidAccessors);

const nodesWithInvalid = [];
if (gltf.nodes) {
  gltf.nodes.forEach((node, nodeIndex) => {
    if (node.mesh !== undefined) {
      const mesh = gltf.meshes[node.mesh];
      const invalidMesh = mesh.primitives.some((prim) => invalidAccessors.includes(prim.attributes.POSITION));
      if (invalidMesh) {
        nodesWithInvalid.push({ nodeIndex, nodeName: node.name || null, mesh: node.mesh });
      }
    }
  });
}
console.log('nodesWithInvalid', nodesWithInvalid);
