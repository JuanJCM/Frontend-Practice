import React from "react";
import logo from "../images/beaches-azul.png"
import unlimitedliquors from"../images/Footer-photo.jpg";
const FooterPage =()=>{
    return(
        <div className="FooterPage">
            <div className="unlimitedpremiumliquors">
                {/**aqui ira una lightbox del componente */}
                <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum purus ipsum, ac blandit nunc pellentesque posuere. In sollicitudin suscipit metus, ac tincidunt est dictum vitae. Nunc iaculis mauris et faucibus viverra. Curabitur sed ullamcorper felis, at ullamcorper mauris. Morbi lobortis nulla vel dignissim aliquam. Etiam ut fermentum elit. In non dignissim nibh, ut ultrices elit. Donec ornare pellentesque consequat. In nulla elit, aliquet ut ultrices quis, suscipit vel felis. Suspendisse fermentum tincidunt turpis sit amet fringilla. Duis accumsan dolor tellus, quis molestie diam euismod eu. Integer iaculis elit at pharetra tincidunt. Etiam placerat elit facilisis leo suscipit, sit amet congue dolor pharetra.
<br/> <br/>
Donec ut ante a mi ornare cursus vel in ipsum. Sed rutrum felis eget ultrices molestie. Sed vel dapibus nisl. In tincidunt sed ex ut aliquet. Morbi nisi lorem, egestas vitae quam id, efficitur volutpat urna. Maecenas varius metus ut scelerisque auctor. Curabitur lacus metus, tristique a diam id, aliquet ornare magna. Nunc id ultricies turpis, nec faucibus felis.
<br/> <br/>
Donec sit amet lobortis dui, vestibulum rhoncus ipsum. In suscipit consequat diam ut tincidunt. Donec at neque mi. Ut pulvinar tincidunt efficitur. Aliquam placerat elementum dolor, vitae euismod erat tristique eget. Aenean ac posuere urna, sit amet facilisis odio. Vivamus laoreet tortor elit, nec ullamcorper dolor varius et. Etiam venenatis lorem lobortis erat efficitur porta. Donec in justo pretium, iaculis ante at, eleifend orci. Nam convallis neque eu augue placerat, quis eleifend lectus imperdiet. Integer lorem ante, pellentesque sit amet nunc quis, luctus tincidunt magna. Sed posuere egestas cursus. Proin ut felis orci. Vestibulum quis nunc nisl. Vivamus posuere purus nunc, sed consequat augue luctus in.

        </p>
            </div>
            <div className="endpage">
                <img className="bluelogo" src={logo} alt="logo"/>
                <h2>More Quality Inclusions</h2>
                <h3>THAN ANY OTHER RESORTS ON THE PLANET</h3>
                <h3 className="viewButton">View All Inclusions</h3>
            </div>
        </div>
    );
}
export default FooterPage;