import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className="circle">
      <span className="circle__message">Loading...</span>
      <div className="circle__container">
        <div className="circle__big-wrap">
          <div className="circle__small-wrap">
            <div className="circle__divider-wrap">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
