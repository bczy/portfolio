import React from 'react';

import styled from 'styled-components';

function SocialsLinks(){
    const urls = [
      {id: 0, siteName: 'Github', url: 'Welcome to learning React!'},
      {id: 1, siteName: 'Linkedin', url: 'You can install React from npm.'}
    ];
    return (
      <SocialLinksContainer>
          {urls.forEach((link) => 
            <div key={link.id.toString()}><a href={link.url}>{link.siteName}</a></div>
          )}
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