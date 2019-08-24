## Clock Ins

### Get all clock Ins

[**GET /people/{person_id}/clockins.json**](https://developer.teamwork.com/projects/clock-in-clock-out/get-all-clock-ins)

```js
tw.people.clockIns(person_id, options)
```

### Edit a clock in/out entry

[**PUT /clockin/{clockin_id}.json**](https://developer.teamwork.com/projects/clock-in-clock-out/edit-a-clock-in)

```js
tw.clocking.update(clock_id, {
    "clockIn": {
        // --
    }
})
```

### Quick log for another user

[**POST /clockin.json**](https://developer.teamwork.com/projects/clock-in-clock-out/clock-a-person-in)

```js
tw.clocking.create({
    "clockIn": {
        // --
    }
})
```

### Clock me in

[**POST /me/clockin.json**](https://developer.teamwork.com/projects/clock-in-clock-out/clock-me-out)

```js
tw.clocking.me('in')
```

### Clock me out

[**POST /me/clockout.json**](https://developer.teamwork.com/projects/clock-in-clock-out/clock-a-user-in)

```js
tw.clocking.me('out')
```