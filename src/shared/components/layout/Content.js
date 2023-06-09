import React from 'react';
import PropTypes from 'prop-types';

// class Content extends Component {
//   static propTypes = {
//     children: PropTypes.element.isRequired
//   };

//   render() {
//     const { children } = this.props;

//     return (
//       <main>
//         {children}
//       </main>
//     );
//   }
// }

const Content = props => { 
  const { children } = props;

  return ( 
    <main>
      {children} 
    </main>
  ); 
};

Content.propTypes = {
  children: PropTypes.element.isRequired
};

export default Content;