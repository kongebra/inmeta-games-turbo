import { type SchemaTypeDefinition } from "sanity";
import game from "./objects/game";
import department from "./documents/department";
import player from "./documents/player";
import tournament from "./documents/tournament";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // objects
    game,

    // documents
    department,
    player,
    tournament,
  ],
};
