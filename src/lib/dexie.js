import Dexie from "dexie";

const db = new Dexie("pokemon");
db.version(1).stores({
  mypokemon: `++id, pokemonId, name, image`,
});

export default db;
