The directory is meant for batch files that automate certain processes.
These processes are explained here. All files pause after operation.
Not all of these are confirmed to work, so if they don't.. uh.. let me know. /Lily

pullMaster.bat:
commands: git pull origin master
use: Tries to merge the current master branch into the branch your are currently working on.
potential issues: Conflicts will cause it to complain and ask you to manually fix the conflict. See resolveConflict.bat

resolveConflict.bat:
commands: git add -A; git commit -m "Merged master fixed conflict."
use: After manually resolving conflicts in files (open conflicting file, find conflict inserts (<<< HEAD, ====, >>>> master, etc)
Remove the inserted conflict markers and manually piece together the two conflicting files.
ALTERNATIVE: If the conflict can be resolved using one of the two conflicting files and ignoring the other, one of the below codes can be used.

Ours is the local version of the conflicting file, theirs is the remote version. Do for each conflicting file.
git checkout --ours PATH/FILE
git checkout --theirs PATH/FILE
Then run resolveConflict.bat to commit the resolved conflict.
