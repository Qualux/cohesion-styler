import { __ } from '@wordpress/i18n';
import { 
    TextControl, 
    PanelBody, 
    PanelRow,
} from '@wordpress/components';

export default function GapControl({styles, updateStyle}) {

    return(

        <section>
            <PanelBody
                title={__('Gap', 'cohesion')}
                initialOpen={true}
            >
                <PanelRow>
                    <TextControl
                        label={ __("Row Gap", "cohesion") }
                        value={ styles.rowGap }
                        onChange={ (val) => updateStyle('rowGap', val) }
                    />
                    <TextControl
                        label={ __("Column Gap", "cohesion") }
                        value={ styles.columnGap }
                        onChange={ (val) => updateStyle('columnGap', val) }
                    />
                </PanelRow>
            </PanelBody>
        </section>

    );

}