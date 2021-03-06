import * as React from 'react';
 

import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';
import JqxSwitchButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxswitchbutton';

class App extends React.PureComponent<{}> {
    private myDropDownButton = React.createRef<JqxDropDownButton>();

    constructor(props: {}) {
        super(props);
    };

    public componentDidMount() {
        const dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">DropDownButton</div>';
        this.myDropDownButton.current!.setContent(dropDownContent);
    }

    public render() {
        return (
            <div>
                <strong>Checkbox</strong>
                <JqxCheckBox theme={'material-purple'} style={{ marginTop: '10px' }} width={85} rtl={true}>eLearning</JqxCheckBox>
                <JqxCheckBox theme={'material-purple'} style={{ marginTop: '5px', marginBottom: '10px' }} width={85} rtl={true}>Mobile</JqxCheckBox>
                <strong>Radio Button</strong>
                <JqxRadioButton theme={'material-purple'} style={{ marginTop: '10px' }} width={85} rtl={true}>On</JqxRadioButton>
                <JqxRadioButton theme={'material-purple'} style={{ marginTop: '5px', marginBottom: '10px' }} width={85} rtl={true}>Off</JqxRadioButton>
                <strong>DropDown Button</strong>
                <JqxDropDownButton theme={'material-purple'} ref={this.myDropDownButton} style={{ marginTop: '10px', marginBottom: '10px' }}
                    width={180} height={25} rtl={true}>
                    <div>
                        <ul>
                            <li>Education</li>
                            <li>Financial services</li>
                            <li>Government</li>
                            <li>Manufacturing</li>
                            <li>
                                Solutions
                                <ul>
                                    <li>eLearning</li>
                                    <li>Mobile</li>
                                    <li>RIA</li>
                                    <li>Training</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </JqxDropDownButton>
                <strong>Switch Button</strong>
                <JqxSwitchButton style={{ marginTop: '10px' }} width={100} rtl={true}/>
            </div>
        );
    }
}

export default App;