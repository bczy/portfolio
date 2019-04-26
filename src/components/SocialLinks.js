  import React from 'react';

import styled from 'styled-components';

function SocialsLinks(){
    return (
      <SocialLinksContainer>
        <div class="badge"><img alt="github profil" src="img/github-logo.png"/></div>
        <div class="badge"><img alt="likedin profil" src="img/js-logo.png"/></div>
        <div class="badge"><img alt="instagram profil" src="img/linkedin-logo.png"/></div>
      </SocialLinksContainer>
    );
}

const SocialLinksContainer = styled.div`  
{
  display: flex;
  flex-wrap: wrap;
}
.badge {
  flex: 1 0 21%;
  margin: 5px;
  height: 100px;
  text-align:center;
}
img{
  width:10em;
}
`
export default SocialsLinks;