## Clocking

### Update a clock in entry

[**PUT /clockin/{clock_id}.json**](https://developer.teamwork.com/projects/clock-in-clock-out/edit-a-clock-in)

```js
tw.clocking.update(clock_id, body)
```

### Create clock in for another user

[**POST /clockin.json**](https://developer.teamwork.com/projects/clock-in-clock-out/clock-a-person-in)

```js
tw.clocking.create(body)
```

### clock yourself in or out

[**POST /me/clock{in | out}.json**](https://developer.teamwork.com/projects/clock-in-clock-out/clock-me-out)

```js
tw.clocking.me('in' || 'out')
```
