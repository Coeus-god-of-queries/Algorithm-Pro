import * as pg from 'pg';

const PG_URI = 'postgres://vtppyvkl:vq40dVqK3SetJWHopzl8WhYmWvRh0oNe@heffalump.db.elephantsql.com/vtppyvkl'

const pool = new pg.Pool({
    connectionString: PG_URI,
});

const db = {
  query: (text: string, params: string[]) => {
      return pool.query(text, params);
  }
}
export default db;