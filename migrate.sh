# Read arguments passed to the script.
if [ -z "$1" ]; then
 ENVIRONMENT='development'
else
 ENVIRONMENT="$1"
fi

echo ""
echo "Migrating for environment: $ENVIRONMENT"
echo ""

echo " -> Step 1/2: Compiling migration scripts."
echo ""
 npx tsc ./src/database/**/*.ts -outDir ./build-migrations
echo ""
echo " -> Compilation completed."
echo ""

echo ""
echo " -> Step 2/2: Starting migration."
echo ""
 npx sequelize-cli db:migrate
echo ""
echo " -> Migration completed."
echo ""