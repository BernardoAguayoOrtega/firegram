//import react
import React, { useState } from 'react';

//create and export upload Form
const UploadForm = () => {
	//use state hook for file
	const [file, setFile] = useState(null);
	//use state hook for error
	const [error, setError] = useState(null);
	//array with allow types
	const types = ['image/png', 'image/jpeg'];
	//changeHandler
	const changeHandler = (e) => {
		const selected = e.target.files[0];

		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError(null);
		} else {
			setFile(null);
			setError('please select an image file (png or jpeg)');
		}
	};

	return (
		<form>
			<input type='file' onChange={changeHandler} />
			<div className='output'>
				{error && <div className='error'>{error}</div>}
				{file && <div>{file.name}</div>}
			</div>
		</form>
	);
};

export default UploadForm;
