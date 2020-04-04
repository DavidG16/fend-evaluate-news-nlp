  
import {validURL} from '../client/js/urlCheck'

test('checks for url it should resolve to 2', ()=> {
    expect(validURL("https://www.google.com/")).toBe(true)
    });