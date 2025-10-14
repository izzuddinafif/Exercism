
def begins_with_a_vowel(text):
    vowels = "aiueoAIUEO"
    if len(text) <= 1:
        return text in vowels
    return all(char in vowels for char in text[0])

def translate(txt):
    texts = txt.split(' ')
    translated = []
    for text in texts:
        if len(text) <= 1:
            return 'nah'
        print(len(text))
        if text.startswith('xr') or text.startswith('yt') or begins_with_a_vowel(text):
            translated.append( text+'ay')
        elif not begins_with_a_vowel(text):
            y_ind = None
            i = 0
            cons_prefix = ""
            while(not begins_with_a_vowel(text[i:])):
                if text[i] == 'y':
                    y_ind = i
                cons_prefix += text[i]
                i += 1
            if len(text) > 0 and text[i-1:i+1] == 'qu':
                translated.append(text[i+1:] + text[:i+1] + 'ay')
            elif type(y_ind) == int:
                if y_ind == 0: # if starts with y
                    translated.append(text[y_ind+1:] + text[:y_ind] + 'y' + 'ay')
            
                else:
                    translated.append(text[y_ind:] + text[:y_ind] + 'ay')
    
            else:
                translated.append( text[i:] + cons_prefix + 'ay')
    return " ".join(translated)
        
    
print(translate('yellow lmo'))
