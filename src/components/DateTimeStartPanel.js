/**
 * WordPress dependencies.
 */
import {
	Button,
	Dropdown,
	Flex,
	FlexItem,
	PanelRow,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import { DateTimeStartLabel, DateTimeStartPicker } from './DateTime';
import { hasEventPastNotice } from '../helpers/event';
import { Broadcaster } from '../helpers/broadcasting';

const DateTimeStartPanel = (props) => {
	const { dateTimeStart, setDateTimeStart } = props;

	useEffect(() => {
		hasEventPastNotice();

		Broadcaster({
			setDateTimeStart: dateTimeStart,
		});
	});

	return (
		<PanelRow>
			<Flex>
				<FlexItem>{__('Start', 'gatherpress')}</FlexItem>
				<FlexItem>
					<Dropdown
						position="bottom left"
						renderToggle={({ isOpen, onToggle }) => (
							<Button
								onClick={onToggle}
								aria-expanded={isOpen}
								isLink
							>
								<DateTimeStartLabel
									dateTimeStart={dateTimeStart}
								/>
							</Button>
						)}
						renderContent={() => (
							<DateTimeStartPicker
								dateTimeStart={dateTimeStart}
								setDateTimeStart={setDateTimeStart}
							/>
						)}
					/>
				</FlexItem>
			</Flex>
		</PanelRow>
	);
};

export default DateTimeStartPanel;
