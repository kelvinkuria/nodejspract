console.log(module)

const id = module.id;
const filename = module.filename;
const loaded = module.loaded;

const parent = module.parent;

module.exports = {
    id,filename,loaded,parent
}