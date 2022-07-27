

import app from '../server/src/server';
import * as pg from 'pg';
import supertest from 'supertest';

app.listen(3000, () => {
  console.log("Server listening at 3001 for testing login");
});

beforeEach((done) => {
    const pool = new pg.Pool({
      connectionString: 'postgres://vtppyvkl:vq40dVqK3SetJWHopzl8WhYmWvRh0oNe@heffalump.db.elephantsql.com/vtppyvkl'});
  });


  test("POST /login", async () => {
    const post = await Post.create({ title: "Post 1", content: "Lorem ipsum" });
  
    await supertest(app).post("/api/posts")
      .expect(200)
      .then((response) => {
        // Check type and length
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(1);
  
        // Check data
        expect(response.body[0]._id).toBe(post.id);
        expect(response.body[0].title).toBe(post.title);
        expect(response.body[0].content).toBe(post.content);
      });
  });