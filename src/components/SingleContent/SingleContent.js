import { Badge } from '@mui/material';
import { img_300, unavailable } from '../../config/config';
import ContentModal from '../ContentModal/ContentModal';
import "./SingleContent.css";

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
}) => {
    return (
        <ContentModal media_type={media_type} id={id}>
            <div className='media'>

                <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"} />

                <img
                    className='poster'
                    alt={title}
                    src={poster ? `${img_300}/${poster}` : unavailable} />
                <div>
                    <b className='title'>
                        {title}
                    </b>
                </div>
                <span className='subTitle'>
                    {media_type === 'tv' ? 'Tv Series' : 'Movie'}
                </span>
                <span className='subTitle'>
                    {date}
                </span>
            </div>

        </ContentModal>
    )
}

export default SingleContent
