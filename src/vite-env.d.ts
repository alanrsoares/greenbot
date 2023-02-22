/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace svelte.JSX {
  interface DOMAttributes<T> {
    onoutsideclick?: CompositionEventHandler<T>;
  }
}

declare module "typewriter-effect/dist/core" {
  /**
   * Typewriter
   */
  export default class Typewriter {
    constructor(
      element: string | HTMLElement,
      options: {
        /**
         * strings	String or Array	null	Strings to type out when using autoStart option
         *
         */
        strings?: string[];
        /**
         * cursor	String	Pipe character	String value to use as the cursor.
         */
        cursor?: string;
        /**
         * delay	'natural' or Number	'natural'	The delay between each key when typing.
         */
        delay?: number;
        /**
         * deleteSpeed	'natural' or Number	'natural'	The delay between deleting each character.
         */
        deleteSpeed?: number;
        /**
         * loop	Boolean	false	Whether to keep looping or not.
         */
        loop?: boolean;
        /**
         * autoStart	Boolean	false	Whether to autostart typing strings or not. You are required to provide strings option.
         */
        autoStart?: boolean;
        /**
         * pauseFor	Number	1500	The pause duration after a string is typed when using autostart mode
         */
        pauseFor?: number;
        /**
         * devMode	Boolean	false	Whether or not to display console logs.
         */
        devMode?: boolean;
        /**
         * skipAddStyles	Boolean	Skip adding default typewriter css styles.
         */
        skipAddStyles?: boolean;
        /**
         * wrapperClassName	String	'Typewriter__wrapper'	Class name for the wrapper element.
         */
        wrapperClassName?: string;
        /**
         * cursorClassName	String	'Typewriter__cursor'	Class name for the cursor element.
         */
        cursorClassName?: string;
        /**
         * stringSplitter	Function	String splitter function, can be used to split emoji's
         */
        stringSplitter?: (str: string) => string[];
        /**
         * onCreateTextNode	Function	null	Callback function to replace the internal method which creates a text node for the character before adding it to the DOM. If you return null, then it will not add anything to the DOM and so it is up to you to handle it.
         */
        onCreateTextNode?: (char: string) => void;
        /**
         * onRemoveNode	Function	null	Callback function when a node is about to be removed. First param will be an object { node?: HTMLNode, charater?: string }
         */
        onRemoveNode?: (node: HTMLElement, char: string) => void;
      }
    );

    /**
     * Start the typewriter effect.
     */
    start(): Typewriter;
    /**
     * Stop the typewriter effect.
     */
    stop(): Typewriter;
    /**
     * Pause for milliseconds
     * @param ms number
     */
    pauseFor(ms: number): Typewriter;
    /**
     * Type out a string using the typewriter effect.
     */
    typeString(str: string): Typewriter;
    /**
     * Paste out a string.
     * @param str string
     */
    pasteString(str: string): Typewriter;
    /**
     * Delete everything that is visible inside of the typewriter wrapper element.
     */
    deleteAll(speed: number): Typewriter;
    /**
     * Delete and amount of characters, starting at the end of the visible string.
     * @param amount number
     */
    deleteChars(amount: number): Typewriter;
    /**
     * Call a callback function. The first parameter to the callback elements which contains all DOM nodes used in the typewriter effect.
     */
    callFunction(cb: () => void, thisArg?: typeof this): Typewriter;
    /**
     * The speed at which to delete the characters, lower number is faster.
     */
    changeDeleteSpeed(speed: number): Typewriter;
    /**
     * Change the delay when typing out each character
     * @param delay number
     */
    changeDelay(delay: number): Typewriter;
  }
}
