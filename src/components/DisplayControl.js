import { __ } from '@wordpress/i18n';
import { 
    TextControl, 
    PanelBody, 
    PanelRow,
} from '@wordpress/components';

export default function DisplayControl({styles, updateStyle}) {

    return(

        <section>
            <PanelBody
                title={__('Display', 'cohesion')}
                initialOpen={true}
            >
                <PanelRow>
                    <TextControl
                        label={ __("Display", "cohesion") }
                        value={ styles.display }
                        onChange={ (val) => updateStyle('display', val) }
                        placeholder="16px"
                    />
                </PanelRow>
            </PanelBody>
        </section>

    );

}