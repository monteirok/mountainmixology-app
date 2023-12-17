import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../globals.css'

export default function Page() {
  return (
    <div className="container-fluid p-5">
        {/* header container */}
        <div className="container text-warning text-center">
            <u className="fs-1 fw-bold">About Us</u>
        </div>
        {/* content container */}
        <div className={`${styles.aboutUs} container text-light p-5`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie magna et nisl ornare venenatis. Nullam porttitor volutpat est. Donec eu leo nec lorem malesuada iaculis. Pellentesque hendrerit vehicula tellus, vel finibus lectus euismod quis. Proin vitae nibh est. Cras blandit justo felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <br></br>
            <p>Maecenas vulputate malesuada purus, at venenatis enim viverra non. Aliquam at malesuada dolor. Curabitur commodo urna tortor. Nunc cursus odio sed convallis efficitur. Vivamus eget ipsum ac metus finibus feugiat non tincidunt tellus. Quisque efficitur fringilla aliquam. Nullam quis aliquam lacus. Aenean sollicitudin lacinia mi, nec sollicitudin risus maximus eget. Nam at purus aliquet, dapibus lectus rhoncus, aliquam mauris. Suspendisse a nibh ante.</p>
            <br></br>
            <p>In et sem ultrices, dictum est a, finibus libero. Quisque lacinia mi eget nibh lacinia ornare. Donec tempor lacinia neque, at laoreet sapien vulputate vel. Fusce non viverra ex, hendrerit auctor purus. Quisque posuere elementum eros at ultrices. Mauris eget massa diam. Donec tempor leo et urna fermentum ullamcorper sed at dolor. Praesent venenatis tempus orci, id aliquet mi.</p>
            <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie magna et nisl ornare venenatis. Nullam porttitor volutpat est. Donec eu leo nec lorem malesuada iaculis. Pellentesque hendrerit vehicula tellus, vel finibus lectus euismod quis. Proin vitae nibh est. Cras blandit justo felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </div>
    </div>
  )
}
