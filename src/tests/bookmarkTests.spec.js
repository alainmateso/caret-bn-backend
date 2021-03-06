import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import generateToken from '../utils/generateToken';
import mockData from './mockData/mockData';

chai.should();
chai.use(chaiHttp);

const userToken = generateToken(mockData.verifiedUser1);
const userToken2 = generateToken(mockData.verifiedUser3);
const wrongToken = 'wrongToken'

describe("~~~~~ Bookmarks Tests ~~~~~", ()=> {
  it('it should retrieve all bookmarks for the logged in user', done => {
      chai.request(app)
        .get('/api/v1/bookmarks')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
      });
      
  it('it should reject an invalid token', done => {
    chai.request(app)
      .get('/api/v1/bookmarks')
      .set('Authorization', `Bearer ${wrongToken}`)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
    });
  it('it should reject a missing token', done => {
    chai.request(app)
      .get('/api/v1/bookmarks')
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
    });

    it('it should tell the user that no bookmarks were found', done => {
      chai.request(app)
        .get('/api/v1/bookmarks')
        .set('Authorization', `Bearer ${userToken2}`)
        .end((err, res) => {            
          res.should.have.status(200);
          done();
        });
    });

  it('Should return a 404 error, accommodation not found', done => {
      chai.request(app)
        .post('/api/v1/accommodations/no-hotel/bookmark')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
      });

  it('Should bookmark an accommodation, 201 status', done => {
    chai.request(app)
      .post('/api/v1/accommodations/el-gorillaz/bookmark')
      .set('Authorization', `Bearer ${userToken}`)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
    });

  it('Should unbookmark an accommodation, 200 status', done => {
    chai.request(app)
      .post('/api/v1/accommodations/el-gorillaz/bookmark')
      .set('Authorization', `Bearer ${userToken}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
}); 
