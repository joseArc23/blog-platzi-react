import React from 'react';

import { connect } from 'react-redux'

import Spinner from '../utils/Spinner'
import Fatal from '../utils/Fatal'

const Comments = (props) => {
	console.log(props)
	
	if (props.com_error) {
		return <Fatal message={props.com_error} />
	}
	// para evitart que recarguen los comentarios ya abiertos
	if (props.com_loading && !props.comments.length) {
		return <Spinner />
	}
	const setComments = () => (
	props.comments.map((comment) => (
		<li key={comment.id}>
			<b>
				<u>
					{comment.email}
				</u>
			</b>
			<br/>
			{comment.body}
		</li>
	))
	)

	return (
		<ul>
			{setComments()}
		</ul>
	);
};

const mapStateToProps = ({ postsReducer }) => postsReducer

export default connect(mapStateToProps, null)(Comments);