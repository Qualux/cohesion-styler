import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { 
    TextControl, 
    PanelBody, 
    PanelRow,
} from '@wordpress/components';
import './editor.scss';
import DisplayControl from '../../components/DisplayControl';

export default function Edit({ attributes, setAttributes }) {

    const { styles } = attributes;

    const updateStyle = (property, val) => {
        setAttributes({ 
            styles: {
                ...styles,
                [property]: val,
            }
        });
    };  

    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody
                    title={__('Styler Settings', 'cohesion')}
                    initialOpen={true}
                >
                    <PanelRow></PanelRow>
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <h2>
                    STYLER BLOCK
                </h2>
                <DisplayControl
                    updateStyle={updateStyle}
                    styles={styles}
                />
            </div>
        </> 
    );
}
