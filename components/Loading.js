import ReactLoading from 'react-loading';

export const Loading = ({type, color}) => (
    <div className="loading">
        <ReactLoading
                        type={type}
                        color={color}
                        height={'5%'}
                        width={'5%'} />
    </div>
)

