SELECT
    a.name,
    a.id
from
    user a
    LEFT JOIN work w on w.id = a.id
WHERE
GROUP BY
ORDER BY
Limit
    10
offset
    20