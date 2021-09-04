import {Link } from 'react-router-dom'

const Movies = (props) => {
  console.log(props);
  return (
    <>
      <h1>Movies list</h1>

      {props.data.map((e) => (
        <div key={e.id}>
          <img src={e.img} alt={e.title} width="320" height="320" />
          <Link to={`/movies/${e.id}`}> <h1>{e.title}</h1> </Link>
        </div>
      ))}
    </>
  );
};

export default Movies;
