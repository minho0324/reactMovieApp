import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



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
    <div>
        {loading ? 
            (
                <div>
                <span>Loading...</span>
                </div>
            )
            :
            (
            <div>
                <h1>영화 상세보기</h1>
                <img src={detail.large_cover_image}  />
                <h2>{detail.title_long}</h2>
                <h3>{detail.description_full}</h3>
                <div>
                    <h4>토렌트 다운받기</h4>
                </div>
            </div>
            )
        }
    </div>
  );


}

export default Detail;