import * as React from "react";
import { Text } from "react-native";
// import PropTypes from 'prop-types';

// export default class SpecialText extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render() {
//         return (
//             <Text style={this.props.fTextColor}>
//               {this.props.fText}
//               <Text style={this.props.sTextColor}>{this.props.sText}</Text>
//             </Text>
//         );
//     }
// }

// SpecialText.propTypes = {fText: PropTypes.string.isRequired, fTextColor: PropTypes.object.isRequired,
//     sText: PropTypes.string.isRequired, sTextColor: PropTypes.object.isRequired};

const SpecialText = ( {fText, fTextColor, sText, sTextColor} ) => {
    return (
        <Text style={fTextColor}>
            {fText}
            <Text style={sTextColor}>
                {sText}
            </Text>
        </Text>
    )
};

export default SpecialText;