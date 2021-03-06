import React, { useEffect, useState } from 'react';

export default function Home() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [loading, setLoading] = useState(true);
  const FIRST_NAME = 'Chinmay';
  const LAST_NAME = 'Gopal';

  useEffect(() => {
    if (loading) {
      initIso();
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    if (fName.length !== FIRST_NAME.length) {
      setTimeout(() => {
        setFName(fName + FIRST_NAME[fName.length]);
      }, 50);
    } else if (lName.length !== LAST_NAME.length) {
      setTimeout(() => {
        setLName(lName + LAST_NAME[lName.length]);
      }, 50);
    }
  }, [fName, lName]);

  function initIso() {
    let width = window.innerWidth;
    let height = window.innerHeight;

  }

  return (
    <div className="page" id="home">
      <div className="name">
        <h1>
          {fName}&nbsp;
          <br />
          {lName}&nbsp;
        </h1>
        <h2>Developer, Student, Builder.</h2>
      </div>
    </div>
  );
}
