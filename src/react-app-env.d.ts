interface ImportMetaEnv {
  readonly FRONT_MOCK_ENABLE: 'true' | 'false';
}

type JsonValue = JsonObject | JsonArray | string | number | boolean | null;
type JsonArray = Array<JsonValue>;
type JsonObject = {
  [key: string]: JsonValue;
};
type Json = JsonObject | JsonArray;
