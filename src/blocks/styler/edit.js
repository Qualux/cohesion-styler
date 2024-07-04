import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { 
    TextControl, 
    PanelBody, 
    PanelRow,
} from '@wordpress/components';
import './editor.scss';
import DisplayControl from '../../components/DisplayControl';
import { generateStyles } from '../../utils';

export default function Edit({ attributes, setAttributes }) {

    const { styles, selector } = attributes;

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
                    <PanelRow>
                        <TextControl
                            label={ __("Selector", "cohesion") }
                            value={ selector }
                            onChange={ (val) => setAttributes({selector: val}) }
                        />
                    </PanelRow>
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
                <style>{generateStyles(selector, styles)}</style>
            </div>
        </> 
    );
}
