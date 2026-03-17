import '../component/robot.css'

const Robot = () => {
  return (
    <div className="robot-scene">
      <div className="robot-assembly">
        {/* Head/Scanner Section */}
        <div className="robot-head">
          <div className="scanner-eye">
            <div className="lense"></div>
          </div>
        </div>

        {/* Main Body with details */}
        <div className="robot-body">
          <div className="panel-lines"></div>
          <div className="chest-detail">
            <div className="led-status active"></div>
            <div className="vent"></div>
          </div>
        </div>

        {/* Base/Wheels Section */}
        <div className="robot-base">
          <div className="wheel left-wheel">
            <div className="wheel-cap"></div>
          </div>
          <div className="wheel right-wheel">
            <div className="wheel-cap"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robot;