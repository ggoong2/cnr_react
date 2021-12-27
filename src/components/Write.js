import React from 'react';
import styled from 'styled-components';

const WriteBlock = styled.div`
.App {
  text-align: center;
}

.movie-container {
  margin: 0 auto;
  width: 80%;
  border: 1px solid #333;
  padding: 10px 0 30px 0;
  border-radius: 5px;
  margin-bottom : 50px;
}

.form-wrapper{
  width: 80%;
  margin: 0 auto;
}

.title-input {
  width: 500px;
  height: 40px;
  margin: 10px;
}

.text-area {
  width: 80%;
  min-height: 500px;
}

.submit-button {
  width: 200px;
  height: 50px;
  font-size: 20px;
  padding: 20px;
  border: none;
  background: indianred;
  border-radius: 5px;
}

`;

function Write() {
  return (
    <WriteBlock>
      <div className="App">
        <h1>Movie Review</h1>
        <div className='movie-container'>
          <h2>제목 d</h2>
          <div>
            내용
          </div>
        </div>
        <div className='form-wrapper'>
          <input className="title-input" type='text' placeholder='제목' />
          <textarea className="text-area" placeholder='내용'></textarea>
        </div>
        <button className="submit-button">입력</button>
      </div>
    </WriteBlock>
  );
}

export default Write;

