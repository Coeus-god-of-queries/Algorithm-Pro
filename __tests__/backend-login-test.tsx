

import app from '../src/server/server';
import * as pg from 'pg';
import request from 'supertest';
import { Response } from 'express';
const server = 'http://localhost:3001';

app.listen(3001, () => {
  console.log("Server listening at 3001 for testing login");
});


const pool = new pg.Pool({
    connectionString: 'postgres://vtppyvkl:vq40dVqK3SetJWHopzl8WhYmWvRh0oNe@heffalump.db.elephantsql.com/vtppyvkl'});


afterAll(() => {
  pool.end(() => {
    console.log('pool has ended')
  })
});

describe('/login', () => {

  // For this test, you'll need to inspect the body of the response and
  // ensure it contains the markets list. Check the markets.dev.json file
  // in the dev database to get an idea of what shape you're expecting.
  it('should successly getting connection to the backend and database', () => { 
    return request(server)
      .post('/login')
      .send({ username: 'admin', password: '123456' })
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    });

    it("should receive username and password", async () => {
      const response = await request(server).post("/login").send({username: 'admin', password: '123456'});
      const data = response.body[0];

      //console.log(data,'<-- data')
      expect(response.statusCode).toBe(200);
      expect(data.username).toBe('admin');
      expect(data.password).toBe('123456');
    });
}); 
//lol still need to add after each thing

