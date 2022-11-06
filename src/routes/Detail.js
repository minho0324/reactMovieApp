import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";



function Detail() {

    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json);
    setDetail(json.data.movie);
    setLoading(false);

  };


  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.container}>
        {loading ? 
            (
                <div className={styles.loader}>
                <span>Loading...</span>
                </div>
            )
            :
            (
            <div>
              <div className={styles.movie}>
                <img src={detail.large_cover_image} alt={detail.title} className={styles.movie__img} />
                <div>
                  <h2 className={styles.movie__title}>
                    {detail.title}
                  </h2>
                  <h3 className={styles.movie__year}>{detail.year}</h3>
                  <p>{detail.description_full}</p>
                  <ul className={styles.movie__genres}>
                    {detail.genres.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                  <div>
                    <a href={detail.torrents[0].url}>download via Torrents</a>
                  </div>
                  <div>
                    <a href={detail.url}>VISIT Official Website</a>
                  </div>
                </div>
              </div>    
            </div>


            )
        }
    </div>
  );


}

export default Detail;