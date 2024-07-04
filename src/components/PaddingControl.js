import { __ } from '@wordpress/i18n';
import { 
    TextControl, 
    PanelBody, 
    PanelRow,
} from '@wordpress/components';

export default function PaddingControl({styles, updateStyle}) {

    return(

        <section>
            <PanelBody
                title={__('Padding', 'cohesion')}
                initialOpen={true}
            >
                <PanelRow>
                    <TextControl
                        label={ __("Top", "cohesion") }
                        value={ styles.paddingTop }
                        onChange={ (val) => updateStyle('paddingTop', val) }
                    />
                    <TextControl
                        label={ __("Right", "cohesion") }
                        value={ styles.paddingRight }
                        onChange={ (val) => updateStyle('paddingRight', val) }
                    />
                    <TextControl
                        label={ __("Bottom", "cohesion") }
                        value={ styles.paddingBottom }
                        onChange={ (val) => updateStyle('paddingBottom', val) }
                    />
                    <TextControl
                        label={ __("Left", "cohesion") }
                        value={ styles.paddingLeft }
                        onChange={ (val) => updateStyle('paddingLeft', val) }
                    />
                </PanelRow>
            </PanelBody>
        </section>

    );

}