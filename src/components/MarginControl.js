import { __ } from '@wordpress/i18n';
import { 
    TextControl, 
    PanelBody, 
    PanelRow,
} from '@wordpress/components';

export default function MarginControl({styles, updateStyle}) {

    return(

        <section>
            <PanelBody
                title={__('Margin', 'cohesion')}
                initialOpen={true}
            >
                <PanelRow>
                    <TextControl
                        label={ __("Top", "cohesion") }
                        value={ styles.marginTop }
                        onChange={ (val) => updateStyle('marginTop', val) }
                    />
                    <TextControl
                        label={ __("Right", "cohesion") }
                        value={ styles.marginRight }
                        onChange={ (val) => updateStyle('marginRight', val) }
                    />
                    <TextControl
                        label={ __("Bottom", "cohesion") }
                        value={ styles.marginBottom }
                        onChange={ (val) => updateStyle('marginBottom', val) }
                    />
                    <TextControl
                        label={ __("Left", "cohesion") }
                        value={ styles.marginLeft }
                        onChange={ (val) => updateStyle('marginLeft', val) }
                    />
                </PanelRow>
            </PanelBody>
        </section>

    );

}