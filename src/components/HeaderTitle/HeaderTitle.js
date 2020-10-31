import backgroundImg from 'assets/wildfire-bg.jpg'

const HeaderTitle = (props) => {
    return (
        <div className="header grid margins">
            <img
                className="backgroundImg"
                src={backgroundImg}
                alt="Header background"
            />
            <div className="title center">
                <h2>
                    LOREM IPSUM DOLOR SIT AMET
                </h2>
                <div>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                </div>
            </div>
        </div>
    )
}

export default HeaderTitle