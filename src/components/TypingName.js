import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const TypingName = ({ name }) => {
	const [typedName, setTypedName] = useState("");
	const [currentlyDeleting, setCurrentlyDeleting] = useState(false);
	const [nameToBeTyped, setNameToBeTyped] = useState(name);
	const [cursorVisible, setCursorVisible] = useState(true);

	//Handles the typing of the title/name
	useEffect(() => {
		if (typedName.length >= name.length || currentlyDeleting) {
			return;
		}

		const typeNextLetter = () => {
			const splitName = name.split("");
			setTypedName((prevTypedName) =>
				prevTypedName.concat(splitName[prevTypedName.length])
			);
		};

		const timer = setTimeout(typeNextLetter, 200);

		return () => clearTimeout(timer);
	}, [currentlyDeleting, name, typedName]);

	//Handles the blinking '|' character
	useEffect(() => {
		const timer = setInterval(() => {
			setCursorVisible((prev) => !prev);
		}, 250); //timer for blinking

		return () => clearInterval(timer);
	}, []);

	//Handles if the word has changed or is mistyped mid generating
	useEffect(() => {
		if (nameToBeTyped === name) {
			return;
		}

		setCurrentlyDeleting(true);
		setNameToBeTyped(name);

		let i = typedName.length;

		const deleteCharacter = () => {
			if (i >= 0) {
				setTypedName((prevTypedName) => prevTypedName.slice(0, i));
				i--;
				setTimeout(deleteCharacter, 100);
			} else {
				setCurrentlyDeleting(false);
			}
		};

		deleteCharacter();
	}, [name, nameToBeTyped, typedName]);

	return (
		<div className="relative inline-block text-7xl self-center">
			<div className="flex">
				<div>{typedName}</div>
				<div
					style={{ display: "inline-block", width: "1ch", textAlign: "center" }}
				>
					<div>{cursorVisible || currentlyDeleting ? "|" : ""}</div>
				</div>
			</div>
		</div>
	);
};

export default TypingName;
