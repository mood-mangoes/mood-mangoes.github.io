import ResultItem from '../src/components/app/ResultItem.js';

const test = QUnit.test;

QUnit.module('Render Result item');

test('render result item', assert => {
    // arrange
    const resultItem = new ResultItem({
        textResults: {
            textResult: {
                body: 'I was asked to sign a third party contract a week out from stay. If it wasn\'t an 8 person group that took a lot of wrangling I would have cancelled the booking straight away. Bathrooms - there are no stand alone bathrooms. Please consider this - you have to clear out the main bedroom to use that bathroom. Other option is you walk through a different bedroom to get to its en-suite. Signs all over the apartment - there are signs everywhere - some helpful - some telling you rules. Perhaps some people like this but It negatively affected our enjoyment of the accommodation. Stairs - lots of them - some had slightly bending wood which caused a minor injury.' 
            }
        },
        documentResults: 'not null'
    });
    const expected = /*html*/`
                <li class="result-item-flex">
                    <p class="body">I was asked to sign a third party contract a week out from stay. If it wasn't an 8 person group that took a lot of wrangling I would have cancelled the booking straight away. Bathrooms - there are no stand alone bathrooms. Please consider this - you have to clear out the main bedroom to use that bathroom. Other option is you walk through a different bedroom to get to its en-suite. Signs all over the apartment - there are signs everywhere - some helpful - some telling you rules. Perhaps some people like this but It negatively affected our enjoyment of the accommodation. Stairs - lots of them - some had slightly bending wood which caused a minor injury.</p>
                    <div class="tone-id-div"></div>
                </li>
            `;
    
    // act
    const html = resultItem.renderHTML();
    
    // assert
    assert.htmlEqual(expected, html);
});