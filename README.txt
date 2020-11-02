RESOURCES:
-talks
    locally it would be localhost:3000/talks
    but hosted with a domain name it would be [http://[MYWEBSITE.COM]/api/talks]
-attendees
    locally it would be localhost:3000/attendees
    but hosted with a domain name it would be [http://[MYWEBSITE.COM]/api/attendees]

ACTIONS:
-add a talk (POST)
    http://[MYWEBSITE.COM]/api/talks/
-add an attendee (POST)
    http://[MYWEBSITE.COM]/api/attendees/
-add an attendee to the list for a talk(PUT)
    http://[MYWEBSITE.COM]/api/talks/:talk_id
-remove an attendee from a talk (PUT)
    http://[MYWEBSITE.COM]/api/talks/:talk_id


OTHER POSSIBLE END POINTS TO ADD:
   //GET for [/talks]
   //GET for specific talk [/talks/:talk_id]
   //DELETE for delete a talk [/talks/:talk_idd]
   //GET for [/attendees] 
   //GET for [/attendees/:attendee_id] 
   //PUT for updating an attendee  [/attendees/:attendee_id] 
   //DELETE for  [/attendees/:attendee_id] 



Run `npm test` to run tests