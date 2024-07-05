import { __ } from '@wordpress/i18n';
import { 
    TextControl, 
    PanelBody, 
    PanelRow,
} from '@wordpress/components';

export default function BackgroundControl({styles, updateStyle}) {

    return(

        <section>
            <PanelBody
                title={__('Background', 'cohesion')}
                initialOpen={true}
            >
                <PanelRow>
                    <TextControl
                        label={ __("Background Color", "cohesion") }
                        value={ styles.backgroundColor }
                        onChange={ (val) => updateStyle('backgroundColor', val) }
                    />
                </PanelRow>
            </PanelBody>
        </section>

    );

}