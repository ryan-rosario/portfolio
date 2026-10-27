import './Platform.css'

const RING_SIZES = [800, 550, 400, 250]

function Platform() {

    return (
        <div className="platform-scene" aria-hidden="true">
            <div className="platform">
                {RING_SIZES.map((size) => (
                    <div
                        key={size}
                        className="platform-ring"
                        style={{ width: size, height: size }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Platform