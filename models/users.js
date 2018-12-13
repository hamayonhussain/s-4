module.exports = function (sequelize, DataTypes) {
    const Users = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 15],
                makeString: () => {
                    if (!(typeof value === "string")) {
                        throw err("Username must be a string");
                    } else {
                        return true;
                    }
                }
            }
        },
        password: {
            ype: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 15],
                makeString: () => {
                    if (!(typeof value === "string")) {
                        throw err("Password must be a string");
                    } else {
                        return true;
                    }
                }
            }
        },
        email: {
            ype: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 15],
                makeString: () => {
                    if (!(typeof value === "string")) {
                        throw err("Email must be a string");
                    } else {
                        return true;
                    }
                }
            }
        }
    });
    return Users;
};