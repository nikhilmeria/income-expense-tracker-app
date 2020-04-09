import React, { useState } from 'react';
import Modal from 'react-modal';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import AddTransaction from '../components/addTransaction';

Modal.setAppElement('#root'); // req for using 'react-modal' package

const AddModal = () => {
	const style1 = {
		margin: 0,
		top: 'auto',
		right: 0,
		bottom: 20,
		left: 'auto',
		position: 'fixed',
	};
	const style2 = {
		margin: 0,
		top: 'auto',
		right: 'auto',
		bottom: 20,
		left: '0',
		position: 'fixed',
	};
	const [modalIsOpen, setModelIsOpen] = useState(false);
	let [btnValue, setBtnValue] = useState(0);

	const handleBtnClick1 = () => {
		setBtnValue((btnValue = 0));
		setBtnValue((btnValue = btnValue + 1));
	};

	const handleBtnClick2 = () => {
		setBtnValue((btnValue = 0));
		setBtnValue((btnValue = btnValue + 2));
	};

	const handleModal = () => {
		//	console.log('btn => ', btnValue);
		setModelIsOpen(!modalIsOpen);
	};
	return (
		<>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={handleModal}
				style={{
					overlay: {
						backgroundColor: 'lightGrey',
					},
				}}
			>
				<AddTransaction modal={handleModal} btnValue={btnValue} />
			</Modal>
			<Fab
				color="primary"
				aria-label="add"
				style={style1}
				onClick={(e) => {
					handleBtnClick1();
					handleModal(e);
				}}
			>
				<AddIcon />
			</Fab>
			<Fab
				color="secondary"
				size="large"
				aria-label="add"
				style={style2}
				onClick={(e) => {
					handleBtnClick2();
					handleModal(e);
				}}
			>
				<RemoveIcon />
			</Fab>
		</>
	);
};

export default AddModal;
