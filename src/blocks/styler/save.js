import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {

    const { styles } = attributes;

    const blockProps = useBlockProps.save();

    return (
			<div {...blockProps}>
        STYLER BLOCK
			</div>
    );
}