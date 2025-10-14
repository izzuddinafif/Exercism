def response(hey_bob):
    
   if len(hey_bob) == 0 or hey_bob.isspace():
       return 'Fine. Be that way!'
   hey_bob = hey_bob.strip()
   if hey_bob.isupper():
       if hey_bob[-1] == '?':
           return "Calm down, I know what I'm doing!"
       return "Whoa, chill out!"

   if hey_bob[-1] == '?':
       return 'Sure.'
   
   print(hey_bob)
   return 'Whatever.'
print(response(' fd?    '))